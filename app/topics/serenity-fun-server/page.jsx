import SerenityFunServerKeywordPage, { generateMetadata } from './serenity-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityFunServerKeywordPage />;
}
