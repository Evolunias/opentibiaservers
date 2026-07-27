import CustomTibiaraKeywordPage, { generateMetadata } from './custom-tibiara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraKeywordPage />;
}
