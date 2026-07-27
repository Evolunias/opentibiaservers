import LowrateMiracleTibiaKeywordPage, { generateMetadata } from './lowrate-miracle-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMiracleTibiaKeywordPage />;
}
