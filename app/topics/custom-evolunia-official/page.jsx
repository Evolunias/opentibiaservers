import CustomEvoluniaOfficialKeywordPage, { generateMetadata } from './custom-evolunia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaOfficialKeywordPage />;
}
