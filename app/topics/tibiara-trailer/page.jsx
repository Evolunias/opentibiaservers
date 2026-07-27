import TibiaraTrailerKeywordPage, { generateMetadata } from './tibiara-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraTrailerKeywordPage />;
}
