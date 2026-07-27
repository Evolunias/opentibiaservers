import CustomTibiaraOtKeywordPage, { generateMetadata } from './custom-tibiara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraOtKeywordPage />;
}
