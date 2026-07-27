import Ardera80LunarisPage, { generateMetadata } from './ardera-8-0-lunaris';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ardera80LunarisPage />;
}
