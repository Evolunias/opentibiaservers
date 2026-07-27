import PopularOtmadnessTibiaKeywordPage, { generateMetadata } from './popular-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessTibiaKeywordPage />;
}
