import DemoraOnlinePage, { generateMetadata } from './demora-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemoraOnlinePage />;
}
