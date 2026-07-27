import RealMapSerenityOtsKeywordPage, { generateMetadata } from './real-map-serenity-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityOtsKeywordPage />;
}
