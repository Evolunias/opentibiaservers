import CustomTibiascapeOtServerKeywordPage, { generateMetadata } from './custom-tibiascape-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeOtServerKeywordPage />;
}
