import FoxworldServer1Page, { generateMetadata } from './foxworld-server-1';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FoxworldServer1Page />;
}
