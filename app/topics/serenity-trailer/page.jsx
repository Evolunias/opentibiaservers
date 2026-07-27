import SerenityTrailerKeywordPage, { generateMetadata } from './serenity-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityTrailerKeywordPage />;
}
