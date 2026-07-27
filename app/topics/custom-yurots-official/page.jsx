import CustomYurotsOfficialKeywordPage, { generateMetadata } from './custom-yurots-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsOfficialKeywordPage />;
}
