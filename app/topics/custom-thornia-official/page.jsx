import CustomThorniaOfficialKeywordPage, { generateMetadata } from './custom-thornia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaOfficialKeywordPage />;
}
