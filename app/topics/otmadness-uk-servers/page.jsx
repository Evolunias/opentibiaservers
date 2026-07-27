import OtmadnessUkServersKeywordPage, { generateMetadata } from './otmadness-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessUkServersKeywordPage />;
}
