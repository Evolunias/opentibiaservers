import InfernaGuildsKeywordPage, { generateMetadata } from './inferna-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernaGuildsKeywordPage />;
}
