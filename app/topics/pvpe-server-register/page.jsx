import PvpeServerRegisterKeywordPage, { generateMetadata } from './pvpe-server-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerRegisterKeywordPage />;
}
