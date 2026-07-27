import CustomTibiaraOtServerKeywordPage, { generateMetadata } from './custom-tibiara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraOtServerKeywordPage />;
}
