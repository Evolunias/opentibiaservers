import ImperianicTrailerKeywordPage, { generateMetadata } from './imperianic-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicTrailerKeywordPage />;
}
