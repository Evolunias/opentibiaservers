import SerenityRetroServerGermanyKeywordPage, { generateMetadata } from './serenity-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityRetroServerGermanyKeywordPage />;
}
