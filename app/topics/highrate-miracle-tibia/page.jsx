import HighrateMiracleTibiaKeywordPage, { generateMetadata } from './highrate-miracle-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleTibiaKeywordPage />;
}
