import NoxiousotTrailerKeywordPage, { generateMetadata } from './noxiousot-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotTrailerKeywordPage />;
}
