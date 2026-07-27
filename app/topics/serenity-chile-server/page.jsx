import SerenityChileServerKeywordPage, { generateMetadata } from './serenity-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityChileServerKeywordPage />;
}
