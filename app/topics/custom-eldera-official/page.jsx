import CustomElderaOfficialKeywordPage, { generateMetadata } from './custom-eldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaOfficialKeywordPage />;
}
