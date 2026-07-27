import NoResetOtmadnessTibiaKeywordPage, { generateMetadata } from './no-reset-otmadness-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessTibiaKeywordPage />;
}
