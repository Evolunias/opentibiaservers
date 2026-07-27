import CustomThorniaOtKeywordPage, { generateMetadata } from './custom-thornia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaOtKeywordPage />;
}
