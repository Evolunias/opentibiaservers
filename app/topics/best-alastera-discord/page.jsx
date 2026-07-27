import BestAlasteraDiscordKeywordPage, { generateMetadata } from './best-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraDiscordKeywordPage />;
}
