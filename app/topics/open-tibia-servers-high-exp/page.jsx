import OpenTibiaServersHighExpKeywordPage, { generateMetadata } from './open-tibia-servers-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersHighExpKeywordPage />;
}
