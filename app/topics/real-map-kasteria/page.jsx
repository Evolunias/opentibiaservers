import RealMapKasteriaKeywordPage, { generateMetadata } from './real-map-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapKasteriaKeywordPage />;
}
