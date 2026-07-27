import LunaraPage, { generateMetadata } from './lunara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LunaraPage />;
}
