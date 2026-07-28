import NeobotPage, { generateMetadata } from './neobot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeobotPage />;
}
