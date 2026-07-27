import SerenityStatusKeywordPage, { generateMetadata } from './serenity-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityStatusKeywordPage />;
}
