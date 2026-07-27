import TibiaoriginsTrailerKeywordPage, { generateMetadata } from './tibiaorigins-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsTrailerKeywordPage />;
}
