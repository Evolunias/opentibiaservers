import OtmadnessFunServerKeywordPage, { generateMetadata } from './otmadness-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessFunServerKeywordPage />;
}
