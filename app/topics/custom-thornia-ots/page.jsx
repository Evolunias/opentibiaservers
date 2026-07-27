import CustomThorniaOtsKeywordPage, { generateMetadata } from './custom-thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaOtsKeywordPage />;
}
