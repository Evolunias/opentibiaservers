import BlackdProxyPage, { generateMetadata } from './blackd-proxy';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlackdProxyPage />;
}
