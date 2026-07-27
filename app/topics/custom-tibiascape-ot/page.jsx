import CustomTibiascapeOtKeywordPage, { generateMetadata } from './custom-tibiascape-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeOtKeywordPage />;
}
