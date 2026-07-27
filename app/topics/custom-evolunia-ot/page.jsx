import CustomEvoluniaOtKeywordPage, { generateMetadata } from './custom-evolunia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaOtKeywordPage />;
}
