import CustomCarlinotTibiaKeywordPage, { generateMetadata } from './custom-carlinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotTibiaKeywordPage />;
}
