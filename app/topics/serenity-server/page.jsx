import SerenityServerKeywordPage, { generateMetadata } from './serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityServerKeywordPage />;
}
