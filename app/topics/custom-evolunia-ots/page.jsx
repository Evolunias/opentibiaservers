import CustomEvoluniaOtsKeywordPage, { generateMetadata } from './custom-evolunia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaOtsKeywordPage />;
}
