import NewMiracleTibiaKeywordPage, { generateMetadata } from './new-miracle-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleTibiaKeywordPage />;
}
