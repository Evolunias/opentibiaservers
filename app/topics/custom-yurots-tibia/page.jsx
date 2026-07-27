import CustomYurotsTibiaKeywordPage, { generateMetadata } from './custom-yurots-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsTibiaKeywordPage />;
}
