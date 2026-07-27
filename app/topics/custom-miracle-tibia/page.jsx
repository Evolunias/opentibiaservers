import CustomMiracleTibiaKeywordPage, { generateMetadata } from './custom-miracle-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMiracleTibiaKeywordPage />;
}
