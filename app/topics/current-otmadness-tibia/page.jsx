import CurrentOtmadnessTibiaKeywordPage, { generateMetadata } from './current-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessTibiaKeywordPage />;
}
