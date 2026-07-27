import CustomSerenityOtServerKeywordPage, { generateMetadata } from './custom-serenity-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSerenityOtServerKeywordPage />;
}
