import OpenTibiaServersRegisterKeywordPage, { generateMetadata } from './open-tibia-servers-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersRegisterKeywordPage />;
}
