import SerenityRetroServerArgentinaKeywordPage, { generateMetadata } from './serenity-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityRetroServerArgentinaKeywordPage />;
}
