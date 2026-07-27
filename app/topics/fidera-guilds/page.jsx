import FideraGuildsKeywordPage, { generateMetadata } from './fidera-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraGuildsKeywordPage />;
}
