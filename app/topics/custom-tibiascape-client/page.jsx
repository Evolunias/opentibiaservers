import CustomTibiascapeClientKeywordPage, { generateMetadata } from './custom-tibiascape-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiascapeClientKeywordPage />;
}
