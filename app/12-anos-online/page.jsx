import Server12AnosOnlinePage, { generateMetadata } from './12-anos-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Server12AnosOnlinePage />;
}
