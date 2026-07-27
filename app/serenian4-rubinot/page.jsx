import Serenian4RubinotPage, { generateMetadata } from './serenian4-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenian4RubinotPage />;
}
